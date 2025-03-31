class Node{
    private Node next;
    private int data;

    public Node(int data){
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
public class OrderedLinkedList {
    Node head;

    // Metodos

    public void printList(){
        Node ptr = this.head;
        if (ptr == null) {
            System.out.println("La lista esta vacia");
        } else {
            while(ptr != null){
                System.out.println(ptr.getData());
                ptr = ptr.getNext();
            }
        }

    }

    public void insert(int n){
        Node ptr = head;
        Node newNode = new Node(n);
        if (ptr == null){
            head = newNode;
            return;
        }

        if (ptr.getNext() == null) {
            if (n <= ptr.getData()){
                head = newNode;
                head.setNext(ptr);
                return;
            } else {
                head.setNext(newNode);
            }
        }else {
            while (ptr != null) {
                if (ptr.getData() > n && n < ptr.getNext().getData()) {
                    // Ubico a newNode entre ptr y ptr.getNext()
                    Node temp = ptr.getNext();
                    ptr.setNext(newNode);
                    newNode.setNext(temp);
                    return;
                } else if (ptr.getNext() == null) {
                    ptr.setNext(newNode);
                    return;
                }
                ptr = ptr.getNext();
            }
        }
    }
}
