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
        Node ptr = this.head;
        Node newNode = new Node(n);
        if (ptr == null){ // si no tiene elementos
            this.head = newNode;
            return;
        }

        if (ptr.getNext() == null) { // si tiene solo un elemento
            if (n <= ptr.getData()){
                this.head = newNode;
                this.head.setNext(ptr);
                return;
            } else {
                this.head.setNext(newNode);
            }
        }else { // si tiene dos o mas elementos
            while (ptr != null) {
                if (ptr.getNext() != null && ptr.getData() <= n && n <= ptr.getNext().getData()) { // caso en el que existe un elemento mayor y otro menor que newNode y que no sea el ultimo
                    // Ubico a newNode entre ptr y ptr.getNext()
                    Node temp = ptr.getNext();
                    ptr.setNext(newNode);
                    newNode.setNext(temp);
                    return;
                } else if (ptr.getNext() == null && ptr.getData() <= n) { // caso en el que newNode es mayor que todos
                    ptr.setNext(newNode);
                    return;
                } else if(ptr.getNext() == null && ptr.getData() >= n){ // caso en el que newNode es menor que todos
                    ptr = this.head;
                    this.head = newNode;
                    this.head.setNext(ptr);
                    return;
                }
                ptr = ptr.getNext();
            }
        }
    }
}
