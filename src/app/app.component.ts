import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: number[] = [];
  bubbleSorted: number[] = [];
  mergeSorted: number[] = [];
  quickSorted: number[] = [];

  results: {
    bubbleTime: number;
    mergeTime: number;
    quickTime: number;
  } | null = null;

  ngOnInit(): void {
    this.generateRandomData();
  }

  // Generate random data for the demo
  generateRandomData(): void {
    this.data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    this.bubbleSorted = [];
    this.mergeSorted = [];
    this.quickSorted = [];
    this.results = null;
  }

  // Top-level comparison function
  compareSorting(): void {
    // Copy the original array to ensure each sort is using the same data
    const dataForBubble = [...this.data];
    const dataForMerge = [...this.data];
    const dataForQuick = [...this.data];

    // Bubble Sort
    const bubbleStart = performance.now();
    this.bubbleSorted = this.bubbleSort(dataForBubble);
    const bubbleEnd = performance.now();

    // Merge Sort
    const mergeStart = performance.now();
    this.mergeSorted = this.mergeSort(dataForMerge);
    const mergeEnd = performance.now();

    // Quick Sort
    const quickStart = performance.now();
    this.quickSorted = this.quickSort(dataForQuick);
    const quickEnd = performance.now();

    // Record and display results
    this.results = {
      bubbleTime: bubbleEnd - bubbleStart,
      mergeTime: mergeEnd - mergeStart,
      quickTime: quickEnd - quickStart
    };
  }

  // ---------------------------
  // 1) Bubble Sort Algorithm
  // ---------------------------
  private bubbleSort(arr: number[]): number[] {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

  // ---------------------------
  // 2) Merge Sort Algorithm
  // ---------------------------
  private mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  }

  private merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  }

  // ---------------------------
  // 3) Quick Sort Algorithm
  // ---------------------------
  private quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  }
}
