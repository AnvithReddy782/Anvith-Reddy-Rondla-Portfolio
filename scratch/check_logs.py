import os
import json

def check_log(name, conv_id):
    log_path = f"C:\\Users\\anvit\\.gemini\\antigravity\\brain\\{conv_id}\\.system_generated\\logs\\transcript.jsonl"
    print(f"=== {name} ({conv_id}) ===")
    if not os.path.exists(log_path):
        print("Log file does not exist.")
        return
    
    with open(log_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    print(f"Total lines: {len(lines)}")
    if len(lines) == 0:
        return
        
    # Print the last 5 steps
    last_steps = lines[-5:]
    for i, line in enumerate(last_steps):
        try:
            data = json.loads(line)
            step_type = data.get("type", "UNKNOWN")
            status = data.get("status", "UNKNOWN")
            step_idx = data.get("step_index", "UNKNOWN")
            print(f"  Step {step_idx} [{step_type}] - Status: {status}")
            content = data.get("content", "")
            if content:
                print(f"    Content: {content[:200].strip().replace(chr(10), ' ')}...")
            if "tool_calls" in data and data["tool_calls"]:
                tools = [tc.get("name") for tc in data["tool_calls"]]
                print(f"    Tools called: {tools}")
        except Exception as e:
            print(f"    Error parsing line: {e}")

check_log("Homepage Repli Coder", "9e906e99-e781-4be1-bb5b-2612bf0952e0")
check_log("About Repli Coder", "9a11fd7e-e85e-40fb-bcf8-cf265a8405d9")
