public class Main {
    public static void main(String[] args) {
        OrderedLinkedList myList = new OrderedLinkedList();
        // para 2 funciona bien
        myList.insert(2);
        myList.insert(1);
        myList.insert(4);
        myList.insert(3);
        myList.printList();
    }
}