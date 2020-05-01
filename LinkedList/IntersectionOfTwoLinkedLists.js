var getIntersectionNode = function(headA,headB){
    // if (headB == null || headA == null)
    //     return null;
    // let tempNodeA = headA;
    // let tempNodeB = headB;
    // if (tempNodeA == tempNodeB)
    //     return tempNodeA;
    // while (tempNodeA){
    //     while (true){
    //         if (tempNodeA == tempNodeB){
    //             return tempNodeA;
    //         }
    //         if (tempNodeB.next == null)
    //             break;
    //         tempNodeB = tempNodeB.next;
    //     }
    //     if (tempNodeA.next == null)
    //         break;
    //     tempNodeA = tempNodeA.next;
    //     tempNodeB = headB;
    // }
    // return null;

    if (headA == null || headB == null)
        return null;
    /**
        定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
        两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
    **/
    let tempNodeA = headA;
    let tempNodeB = headB;
    // 在这里第一轮体现在pA和pB第一次到达尾部会移向另一链表的表头, 而第二轮体现在如果pA或pB相交就返回交点, 不相交最后就是null==null
    while (tempNodeA != tempNodeB){
        tempNodeA = tempNodeA == null ? headB : tempNodeA.next;
        tempNodeB = tempNodeB == null ? headA : tempNodeB.next;
    }
    return tempNodeA;
}