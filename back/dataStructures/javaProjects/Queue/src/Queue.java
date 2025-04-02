public class Queue {
    static class Node {
        Node next;
        int data;

        public Node(int data) {
            this.data = data;
        }

        public int getData() {
            return data;
        }

        public void setData(int data) {
            this.data = data;
        }

        public Node getNext() {
            return next;
        }

        public void setNext(Node next) {
            this.next = next;
        }


    }

    Node head;

    public void printQueue() {
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

    public void push(int n) {
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

    public int pop() {
        Node temp = head;
        if (head == null) {
            System.out.println("La queue esta vacia");
            return -1;
        }
        if (head.getNext() == null) { // un solo elemento
            head = null;
        } else { // al menos dos elementos
            head = head.getNext();
        }

        return temp.getData();
    }
}

