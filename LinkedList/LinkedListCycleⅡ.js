var detectCycle = function(head){
    if (head == null || head.next == null)
        return null;
    let fastNode = head;
    let slowNode = head;
    let hasCycle = false;
    while (fastNode.next != null && fastNode.next.next != null){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if (fastNode === slowNode){
            hasCycle = true;
            break;
        }
    }

    if (hasCycle == false)
        return null;

    let resultNode = head;
    while (slowNode != resultNode){
        slowNode = slowNode.next;
        resultNode = resultNode.next;
    }
    return resultNode;
}