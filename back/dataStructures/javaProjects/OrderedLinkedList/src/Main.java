public class Main {
    public static void main(String[] args) {
        OrderedLinkedList myList = new OrderedLinkedList();
        myList.insert(2);
        myList.insert(1);
        myList.insert(4);
        myList.insert(2);
        myList.insert(10);
        myList.insert(6);
        myList.insert(6);
        myList.insert(0);
        myList.printList();
    }
}