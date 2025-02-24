def arithmetic_arranger(problems, show_answers=False):

    # Error checks
    if len(problems) > 5:
        return "Error: Too many problems."

    top_values = [problem.split()[0] for problem in problems]
    operators = [problem.split()[1] for problem in problems]
    bottom_values = [problem.split()[2] for problem in problems]


    results = []

    for i in range(len(problems)):
        if (top_values[i].isnumeric() & bottom_values[i].isnumeric()):
            if operators[i] == '+':
                results.append(int(top_values[i]) + int(bottom_values[i]))
            elif operators[i] == '-':
                results.append(int(top_values[i]) - int(bottom_values[i]))
            else:
                return "Error: Operator must be '+' or '-'."
        else:
            return "Error: Numbers must only contain digits."

    lengths = list(map(lambda x, y: max(len(x), len(y)), bottom_values, top_values))

    top_row = ''
    for i in range(len(problems)):
        top_row += ' ' * 2
        extra_gap = lengths[i] - len(top_values[i])
        if lengths[i] > 4:
            return "Error: Numbers cannot be more than four digits."
        top_row += ' ' * extra_gap
        top_row += top_values[i]
        if i < len(problems) - 1:
            top_row += ' ' * 4

    bottom_row = ''
    for i in range(len(problems)):
        bottom_row += operators[i] + ' '
        extra_gap = lengths[i] - len(bottom_values[i])
        bottom_row += ' ' * extra_gap
        bottom_row += bottom_values[i]
        if i < len(problems) - 1:
            bottom_row += ' ' * 4

    lines = ''
    for i in range(len(problems)):
        lines += '-' * (lengths[i] + 2)
        if i < len(problems) - 1:
            lines += ' ' * 4

    results_row = ''
    for i in range(len(problems)):
        extra_gap = lengths[i] - len(str(results[i])) + 2
        results_row += ' ' * extra_gap
        results_row += str(results[i])
        if i < len(problems) - 1:
            results_row += ' ' * 4


    if show_answers:
        return '\n'.join([top_row,bottom_row,lines,results_row])
    else:
        return '\n'.join([top_row,bottom_row,lines])


print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')



print(f'\n{arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)}')


print(f'\n{arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"])}')

