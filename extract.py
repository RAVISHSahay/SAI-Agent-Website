import glob
import subprocess

docs = glob.glob('*.docx')
print(f"Found {len(docs)} documents.")

with open('combined_use_cases.md', 'w') as out_f:
    out_f.write('# SequelString Agentic AI Use Cases\n\n')
    for doc in sorted(docs):
        out_f.write(f'## {doc}\n\n')
        print(f"Converting {doc}...")
        try:
            result = subprocess.run(['textutil', '-convert', 'txt', '-stdout', doc], capture_output=True, text=True, check=True)
            out_f.write(result.stdout)
            out_f.write('\n\n---\n\n')
        except Exception as e:
            out_f.write(f'Error reading {doc}: {e}\n\n')

print("Finished combining files to combined_use_cases.md")
