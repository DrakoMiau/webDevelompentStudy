class Node{
    private int data;
    private Node next;

    public Node(int data){
        this.data = data;
    }
    public int getData(){
        return this.data;
    }
    public void setData(int data){
        this.data = data;
    }
    public Node getNext(){
        return this.next;
    }
    public void setNext(Node next){
        this.next = next;
    }
}

public class LinkedList {
    Node head;

    public LinkedList(){

    }

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

    public void pushBack(int n){
        Node ptr = this.head;
        Node newNode = new Node(n);
        if (ptr == null){
            this.head = newNode;
        } else {
            while(ptr.getNext() != null){
                ptr = ptr.getNext();
            }
            ptr.setNext(newNode);
        }
    }
/*
    public void pushFront(){

    }

    public int popBack(){

    }

    public int popFront(){

    }

    public int topBack(){

    }

    public int topFront(){

    }

    public boolean isEmpty(){

    }

    public boolean find(){
    }
*/
}
