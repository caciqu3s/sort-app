# Sorting Algorithms Comparison

This project is an Angular application that demonstrates and compares the performance of three different sorting algorithms: Bubble Sort, Merge Sort, and Quick Sort. The application generates a random array of numbers and sorts them using each algorithm, displaying the sorted arrays and the time taken by each algorithm.

## Features

- Generate a random array of numbers
- Sort the array using Bubble Sort, Merge Sort, and Quick Sort
- Display the sorted arrays
- Display the time taken by each sorting algorithm

## Sorting Algorithms

This project uses three different sorting algorithms to demonstrate and compare their performance:

1. **Bubble Sort:**
   - Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
   - Time Complexity: O(n^2)

2. **Merge Sort:**
   - Merge Sort is a divide-and-conquer algorithm. It divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves to produce the sorted array.
   - Time Complexity: O(n log n)

3. **Quick Sort:**
   - Quick Sort is another divide-and-conquer algorithm. It picks an element as a pivot and partitions the array around the pivot, such that elements less than the pivot are on the left and elements greater than the pivot are on the right. It then recursively sorts the sub-arrays.
   - Time Complexity: O(n log n) on average, O(n^2) in the worst case

These algorithms are implemented in the application to sort a randomly generated array of numbers and compare their performance in terms of time taken to sort the array.

## Project Structure

```
src/
  app/
    app.component.html
    app.component.scss
    app.component.spec.ts
    app.component.ts
    app.config.ts
    app.routes.ts
  index.html
  main.ts
  styles.scss
angular.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

## Running the Project Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   ng serve
   ```

4. **Open the application in your browser:**

   Navigate to `http://localhost:4200` in your web browser to see the application in action.

## Usage

1. **Generate Random Data:**

   Click the "Generate Random Data" button to create a new random array of numbers.

2. **Compare Sorting:**

   Click the "Compare Sorting" button to sort the array using Bubble Sort, Merge Sort, and Quick Sort. The sorted arrays and the time taken by each algorithm will be displayed.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to modify and enhance the project as needed. Happy coding!
