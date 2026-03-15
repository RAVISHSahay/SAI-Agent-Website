import json
import re

def parse_markdown_to_json(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    documents = re.split(r'^##\s+SequelString_[^\n]+$', content, flags=re.MULTILINE)[1:]
    headers = re.findall(r'^##\s+(SequelString_[^\n]+)$', content, flags=re.MULTILINE)

    all_use_cases = []
    
    for i, doc_content in enumerate(documents):
        doc_name = headers[i].strip()
        function_match = re.search(r'Agentic AI Logic & Flow\n(.*?)\n', doc_content)
        function_name = function_match.group(1).strip() if function_match else doc_name.replace('SequelString_AgenticAI_', '').replace('_AllUseCases.docx', '')

        parts = doc_content.split('WHAT THE AGENT DOES\n')
        
        for j in range(1, len(parts)):
            prev_part = parts[j-1]
            curr_part = parts[j]
            
            prev_lines = prev_part.rstrip().split('\n')
            non_empty = [l.strip() for l in prev_lines if l.strip() and l.strip() != '']
            
            if len(non_empty) < 3:
                continue
                
            id_num = non_empty[-3]
            title = non_empty[-2]
            domain = non_empty[-1]
            
            # Additional cleanup for safety
            if not re.match(r'^\d{2}$', id_num):
                # Search backwards for a 2-digit number
                for idx in range(len(non_empty)-1, -1, -1):
                    if re.match(r'^\d{2}$', non_empty[idx]):
                        id_num = non_empty[idx]
                        title = non_empty[idx+1] if idx+1 < len(non_empty) else "Unknown"
                        domain = " ".join(non_empty[idx+2:])
                        break

            try:
                what_it_does, rest1 = curr_part.split('REASONING LOGIC — LAYERS\n', 1)
                layers_raw, rest2 = rest1.split('AGENT FLOW — STEP BY STEP\n', 1)
                
                flow_raw = rest2
                if j < len(parts) - 1:
                    flow_lines = flow_raw.split('\n')
                    last_num_idx = -1
                    for k in range(len(flow_lines)-1, max(-1, len(flow_lines)-15), -1):
                        if re.match(r'^\d{2}$', flow_lines[k].strip()):
                            # check if the next line is a title and we are near the end
                            last_num_idx = k
                            break
                    if last_num_idx != -1:
                        flow_raw = '\n'.join(flow_lines[:last_num_idx])
            except ValueError as e:
                continue
                
            what_it_does = what_it_does.strip()
            
            layers = []
            for layer_match in re.finditer(r'Layer \d+ — (.*?): (.*?)(?=Layer \d+ —|$)', layers_raw, re.DOTALL):
                layers.append({
                    "name": layer_match.group(1).strip(),
                    "description": layer_match.group(2).strip()
                })
                
            steps = []
            step_matches = re.finditer(r'^(\d{2})\n(.*?)\n(.*?)(?=^\d{2}\n|$)', flow_raw, re.MULTILINE | re.DOTALL)
            for sm in step_matches:
                step_num = sm.group(1).strip()
                agent_name = sm.group(2).strip()
                step_desc = sm.group(3).strip().replace('\n', ' ').replace('', ' ')
                steps.append({
                    "step": step_num,
                    "agent": agent_name,
                    "description": step_desc
                })
            
            use_case = {
                "id": f"{function_name[:3].upper()}-{id_num}",
                "function": function_name,
                "domain": domain,
                "title": title,
                "description": what_it_does,
                "layers": layers,
                "flow": steps
            }
            all_use_cases.append(use_case)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_use_cases, f, indent=2)
        
    print(f"Successfully extracted {len(all_use_cases)} use cases into {output_file}")

if __name__ == "__main__":
    parse_markdown_to_json("combined_use_cases.md", "/Users/ravish/SAI Agent Website/src/data/useCases.json")
