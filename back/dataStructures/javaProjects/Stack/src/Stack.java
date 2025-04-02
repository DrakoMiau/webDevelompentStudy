public class Stack {
    static class Node {
        Node next;
        int data;

        public Node(int data) {
            this.data = data;
        }

        public Node getNext() {
            return next;
        }

        public void setNext(Node next) {
            this.next = next;
        }

        public int getData() {
            return data;
        }

        public void setData(int data) {
            this.data = data;
        }
    }

    Node head;

    public void printStack() {
        Node ptr = this.head;
        if (ptr == null) {
            System.out.println("La lista esta vacia");
        } else {
            while (ptr != null) {
                System.out.println(ptr.getData());
                ptr = ptr.getNext();
            }
        }

    }

    public void push(int n) { // es un pushback
        Node ptr = this.head;
        Node newNode = new Node(n);
        if (ptr == null) {
            this.head = newNode;
        } else {
            while (ptr.getNext() != null) {
                ptr = ptr.getNext();
            }
            ptr.setNext(newNode);
        }
    }

    public int pop() { //es un popback
        Node ptr = head;
        Node prev = head;
        int finalData = -1;
        if (ptr != null && ptr.getNext() == null) { // un elemento
            head = null;
            finalData = prev.getData();
        } else if (ptr != null && ptr.getNext() != null) { // al menos 2 elementos
            while (ptr.getNext() != null) {
                prev = ptr;
                ptr = ptr.getNext();
            }
            prev.setNext(null);
            finalData = ptr.getData();
        } else if (ptr == null) { // 0 elementos
            System.out.println("La lista esta vacia");
        }
        return finalData;
    }
}
