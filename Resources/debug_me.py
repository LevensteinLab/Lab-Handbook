# debug_me.py
# A tiny script with an intentional bug to practice debugging in VS Code.

# First, run the script normally to see the error. Then, set a breakpoint on the line 
# with the division operation and run the debugger to inspect variables.

def divide_numbers(a, b):
    result = a / b
    return result

def main():
    numbers = [(10, 2), (5, 0), (8, 4)]
    total = 0
    for x, y in numbers:
        print(f"Dividing {x} by {y}")
        total += divide_numbers(x, y)
            
    print("Average:", total / len(numbers))
        
if __name__ == "__main__":
    main()