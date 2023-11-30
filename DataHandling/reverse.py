import csv


def transpose(input_file_path, output_file_path, corner_value):

    with open(input_file_path, newline='') as file:
        reader = csv.reader(file)
        data = list(reader)


    transposed_data = list(zip(*data))
    if transposed_data:
        transposed_data[0] = (corner_value,) + transposed_data[0][1:]


    with open(output_file_path, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(transposed_data)


input_file_path = 'data/uniprobs.csv'
output_file_path = 'data/uniprobs_reversed.csv'
corner_value = 'unigram'

transpose(input_file_path, output_file_path, corner_value)
