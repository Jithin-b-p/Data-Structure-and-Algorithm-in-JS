## Amortized DEQUEUE and PEEK

While moveElementsIfNeeded can be expensive in the worst case, it's not called for every dequeue or peek operation. It only happens when outStack is empty, which signifies that several dequeue operations have happened without needing to move elements.
