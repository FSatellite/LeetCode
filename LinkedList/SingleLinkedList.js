var MyLinkedList = function(){
    
    /**
     * 构造新元素
     * @param {*} element
     */
    let myNode = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    /**
     * 向链表尾部追加元素
     * @param {*} element
     */
    this.append = function(element){
        let node = new myNode(element);
        let current = null;
        if (head === null)
            head = node;
        else{
            current = head;
            while (current.next){
                current = current.next;
            }
        current.next = node;
        }
        length++;//链表长度增加
    };

    /**
     * 获取index处的元素
     * @param {*} index
     */
    this.getElement = function(index){
        if (index >= length)
            return -1;
        let current = head;
        let indexTemp = 0;
        while (current){
            if (indexTemp++ === index)
                return current.element;
            else
                current = current.next;
        }
        return null;
    }

    /**
     * 返回元素索引
     * @param {*} element
     */
    this.indexOf = function(element){
        let current = head;
        let index = 0;
        while (current){
            if (current.element === element)
                return index;
            index++;
            current = current.next;
        }
        return -1;
    }

    /**
     * 向链表任意位置插入元素
     * @param {*} index
     * @param {*} element
     */
    this.insert = function(index,element){
        if (index >= 0 && index <= length){
            let node = new myNode(element);
            let current = head;
            if (index === 0){
                node.next = current;
                head = node
            }
            else {
                let current = head,
                previes = null;
                let indexTemp = 0;
        
                while (indexTemp++ < index){
                    previes = current;
                    current = current.next;
                }
                previes.next = node;
                node.next = current;
            }
            length++;
            return true;
        }
        return false;
    }

    /**
     * 删除指定位置元素
     * @param {*} index
     */
    this.removeAt = function(index){
        if (index >= 0 && index < length){
            let current = head,
                previus = null;
            let indexTemp = 0;
            if (index === 0){
                head = current.next;
            }
            else {
                while (indexTemp++ < index){
                    previus = current;
                    current = current.next;
                }
                previus.next = current.next;
            }
            length--;
            return true;
        }
        return false;
    }
}