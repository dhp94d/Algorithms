class Heap {
    constructor() {
        this.heap = [];
    }
    swap(index1, index2){
        [this.heap[index2],this.heap[index1]] = [this.heap[index1],this.heap[index2]];
    }
    insert(number) {
        this.heap.push(number);
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor((currentIndex-1)/2);
        console.log(parentIndex,currentIndex);
        while(this.heap[parentIndex] < this.heap[currentIndex]){
            this.swap(parentIndex,currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2);
        }
    }
    getMax() {
        console.log(this.heap);
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.valueDown(0);

        return console.log(max);      
    }
    valueDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
        const length = this.heap.length - 1;
        if (left <= length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right <= length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            this.swap(index, largest);
            this.valueDown(largest);
        }
    }
}

const heap = new Heap();
heap.insert(3);
heap.insert(5);
heap.insert(2);
heap.getMax();
heap.insert(4);
heap.insert(1);
heap.getMax();
heap.insert(0);
heap.insert(8);
heap.insert(9);
heap.getMax();