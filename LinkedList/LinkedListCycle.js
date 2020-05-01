var hasCycle = function(head){
    if (head == null || head.next == null)
        return false;
    let fastNode = head.next;
    let slowNode = head;
    while (fastNode != slowNode){
        if (fastNode.next == null || fastNode.next.next == null)
            return false;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return true;
}