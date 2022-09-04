// 存放leetCode题目的数据

export const leetContent = [
  {
    id: '1',
    icon: 'el-icon-s-help',
    title: '字符串',
    children: [
      {
        id: '1-1',
        grade: '1', // 1 - 简单 2 - 中等 3 - 困难
        title: '旋转字符串',
        details: [
          {
            html: `
              <h1>题目：旋转字符串</h1>
              <h4>描述：给定两个字符串A和B。A的旋转操作就是将A最左边的字符移动到最右边。例如，若 A = 'abcde'，在移动一次之后结果就是 'bcdea'。如果在若干次旋转操作之后，A能变成B，那么返回True，否则返回false。</h4>
              <p>思路：字符串A*2，进行查询是否包含操作</p>
            `,
            highLight: `
    /**
     * 旋转字符串
     * @param {*} A
     * @param {*} B
     *
     * 输入 A = 'abcde', B = 'cdeab'
     * 输出 true
     * 原因 旋转过程中 A==B
     *
     * 输入 A = 'abcde', B = 'abced'
     * 输出 false
     * 原因 旋转过程中 A!=B
     */

    export const rotateString = function (A, B) {
      if (A.length !== B.length) {
        return false
      }
      let str = A + A
      return str.includes(B)
    }
            `
          }
        ]
      },
      {
        id: '1-2',
        grade: '2',
        title: '无重复字符的最长字串',
        details: [
          {
            html: `
              <h1>题目：无重复字符的最长字串</h1>
              <h4>描述：给定一个字符串 s，请你找出其中不含有重复字符的最大字串的长度</h4>
              <p>思路：利用字符串是否存在重复进行截取以及字符串拼接。相当于队列（先进先出）</p>
            `,
            highLight: `
    /**
     * 无重复字符的最长字串
     * @param {string} s
     * @return {number}
     *
     * 输入 s = 'abcabcbb'
     * 输出 3
     * 原因 因为无重复字符的最长子串是 'abc'，所以其长度为3
     */
    export const lengthOfLongestSubstring = function (s) {
      let maxLen = 0
      let str = ''
      for (let node of s) {
        let index = str.indexOf(node)
        str = str.substring(index + 1) + node
        maxLen = Math.max(maxLen, str.length)
      }
      return maxLen
    }
            `
          }
        ]
      },
      {
        id: '1-3',
        grade: '1',
        title: '字符匹配',
        details: [
          {
            html: `
        <h1>题目：字符匹配</h1>
        <h4>描述：字符匹配 [(()] 和 （[][])</h4>
        <p>思路：基于栈的写法（后进先出）</p>
      `,
            highLight: `
    function is_balance(str){
      const [first, ...others] = str
      const stack = [first]
      while(others.length > 0){
        const c = stack[stack.length - 1]
        const n = other.shift()
        if(!mathch(n, c)){
          stack.push(n)        
        }else{
          stack.pop()        
        }    
      }
      return stack.length === 0
    }
    
    function match(n, c){
      return (c == '[' && n == ']') || (c == '(' && n == ')')
    }
            `
          }
        ]
      },
      {
        id: '1-4',
        grade: '1',
        title: '罗马数字转整数',
        details: [
          {
            html: `
              <h1>题目：罗马数字转整数</h1>
              <h4>描述：罗马数字包含以下七种字符：I->1,V->5,X->10,L->50,C->100,D->500,M->1000。通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如4不写做IIII，而是IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字9表示为IX。
              ①I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。②X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。③C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。</h4>
              <p>思路：使用Map集合进行叠加</p>
            `,
            highLight: `
    /**
     * 罗马数字转整数
     * @param {string} s
     * @return {number}
     *
     * 输入 s = 'IV'
     * 输出 4
     * 原因 旋转过程中 I = 1 , V = 4 且I在V前面。
     *
     * 输入 s = 'LVIII'
     * 输出 58
     * 原因  L = 50, V= 5, III = 3.
     */

    var romanToInt = function(s) {
      let map = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
      let num = 0
      for(let i=0; i<s.length;i++){
          let left = map.get(s[i])
          let right = map.get(s[i+1])
          num += left < right ? -left : left
      }
      return num
    };
            `
          }
        ]
      }
    ]
  },
  {
    id: '2',
    icon: 'el-icon-menu',
    title: '数组',
    children: [
      {
        id: '2-1',
        grade: '1',
        title: '两数相加求目标值',
        details: [
          {
            html: `
              <h1>题目：两数相加求目标值</h1>
              <p>思路：使用Map对象的 has() 和 set() 方法实现，循环数组，进行（目标值 - 数组值）的运算，不匹配时以{ 数组值: 数组下标 } 方式存入Map对象，直到找出匹配的两个数组下标。</p>
            `,
            highLight: `
    // Given nums = [2, 7, 11, 15], target = 9
    // Because nums[0] + nums[1] = 2 + 7 = 9
    // return [0, 1]

    export const twoSum = function (nums, target) {
      const map = new Map()
      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement)) {
          return [map.get(complement), i]
        } else {
          map.set(nums[i], i)
        }
      }
    }
            `
          }
        ]
      },
      {
        id: '2-2',
        grade: '1',
        title: '两个数组的交集',
        details: [
          {
            html: `
              <h1>题目：给定两个数组，编写一个函数来计算他们的交集</h1>
              <p>思路：遍历第一个数组，查看第二个数组中是否存在相同的值，如果存在，则存入Set集合。</p>
            `,
            highLight: `
    /**
     * @param {*} nums1
     * @param {*} nums2
     *
     * Given nums1 = [2, 7, 11, 15], nums2 = [7, 7, 3, 11]
     * return [7, 11]
     */

    // 基础版 数组搜索值includes - 复杂度为 O(n)
    export const interSection1 = function (nums1, nums2) {
      let result = new Set()
      for (let num of nums1) {
        if (nums2.includes(num)) {
          result.add(num)
        }
      }
      return Array.from(result)
    }

    // 优化版 Set/Map 中has - 复杂度为 O(1)
    export const interSection2 = function (nums1, nums2) {
      let result = new Set()
      let nums = new Set(nums2)
      for (let num of nums1) {
        if (nums.has(num)) {
          result.add(num)
        }
      }
      return [...result]
    }
            `
          }
        ]
      },
      {
        id: '3-3',
        grade: '1',
        title: '深拷贝',
        details: [
          {
            html: `
        <h1>题目：深拷贝</h1>
      `,
            highLight: `
    function clone(obj){
      if(obj == null || typeof obj !== 'object') return obj
      const newObj = new obj.constructor()
      for(let key in Object.getOwnPropertyDescriptors(obj)){
          newObj[key] = clone(obj[key])    
      }
      return newObj
    }
    
    function clone(obj){
        return JSON.parse(JSON.stringfy(obj))
    }
            `
          }
        ]
      },
      {
        id: '3-4',
        grade: '1',
        title: '数组去重/展平',
        details: [
          {
            html: `
        <h1>题目：数组去重</h1>
        <p>思路：使用Set集合</p>
      `,
            highLight: `
    [...new Set(['a','v','a','d','v'])] // ['a','v','d']
            `
          },
          {
            html: `
        <h1>题目：数组展平</h1>
        <p>思路：使用Map集合/生成器</p>
      `,
            highLight: `
    // 二维数组  [[1,2],[3,4]]  =>  [1,2,3,4]
    function flattenOnce(arr){
      return [].concat(...arr)
    }

    // 多维数组  [[1,2],3,[4,5]]  =>  [1,2,3,4,5]
    function flatten(arr){
      return [].concat(
        ...arr.map( x => Array.isArray(x) ? flatten(x) : x)
      )
    }

    // 多维数组 [[1,2],3,[4,5]]  =>  [1,2,3,4,5] 生成器实现
    function* flatten(arr){
      for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
          yield * flatten(arr[i])        
        }else{
          yield(arr[i])        
        }
      }
    }
    console.log([...flatten([[1,2],3,[4,5]])]) // [1,2,3,4,5]
            `
          }
        ]
      },
      {
        id: '3-5',
        grade: '2',
        title: '水果成篮',
        details: [
          {
            html: `
        <h1>题目：水果成篮</h1>
        <h4>描述：在一排树中，第 i 棵树产生 tree[i] 型的水果。
                你可以从你选择的任何树开始，然后重复执行一下步骤：
                1、把这棵树上的水果放进你的篮子里。如果你做不到，就停下来。
                2、移动到当前右侧的下一棵树。如果右边没有树，就停下来。
                注意，在选择一棵树后，你没有任何选择：你必须执行步骤1，然后执行步骤2，然后返回步骤1，然后执行步骤2，依此类推，直至停止。
                你有两个篮子，每个篮子可以携带任何数量的水果，但你希望每个篮子只携带一种类型的水果。
                用这个程序你能收集的水果总量是多少呢？</h4>
        <p>思路：题目的意思是求两个篮子的最大总数量。可使用Map的键值对集合进行添加删除，Map最多可放入两个数据（值，下标）。</p>
      `,
            highLight: `
  /**
   * 水果成篮
   * @param {*} tree
   *
   * 输入 [3,3,3,1,2,1,1,2,3,3,4]
   * 输出 5 Max为(1,2,1,1,2)
   */

    export const totalFruit = function (tree) {
      let map = new Map()
      let max = 1
      let j = 0
      for (let i = 0; i < tree.length; i++) {
        map.set(tree[i], i)
        if (map.size > 2) {
          let minIndex = tree.length - 1
          for (let value of map.values()) {
            if (value < minIndex) {
              minIndex = value
            }
          }
          map.delete(tree[minIndex])
          j = minIndex + 1
        }
        max = Math.max(max, i - j + 1)
      }
      return max
    }

            `
          }
        ]
      }
    ]
  },
  {
    id: '3',
    icon: 'el-icon-more',
    title: '链表',
    children: [
      {
        id: '3-1',
        grade: '2',
        title: '两数相加',
        details: [
          {
            html: `
            <h1>题目：两数相加</h1>
            <h4>描述：给定两个非空的链表用来表示两个非负数的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的 每个节点只能存储一位数字。如果我们将这两个数相加起来，则会返回一个新的链来表示它们的和。你可以假设除了数字0之外， 这两个数都不会以0开头。</h4>
            <p>思路：两个非空的链表可以通过new LisNode()进行构造，使用.next进行添加指向。使用while迭代链表，使其节点进行相加，直到没有下一个节点。超出10进位处理，使用carry加1处理。</p>
            `,
            highLight: `
    /**
     * 两数相加
     * @param {*} l1
     * @param {*} l2
     *
     * 输入 (2 -> 4 -> 3), (5 -> 6 -> 4)
     * 输出 7 -> 0 -> 8
     * 原因 342 + 465 = 807
     */
    import { ListNode } from './ListNode.js'
    export const addTwoNumbers = function (l1, l2) {
      let dummy = new ListNode()
      let curr = dummy
      let carry = 0

      while (l1 != null || l2 != null) {
        let sum = 0
        if (l1 !== null) {
          sum += l1.val
          l1 = l1.next
        }
        if (l2 !== null) {
          sum += l2.val
          l2 = l2.next
        }
        sum += carry
        curr.next = new ListNode(sum % 10) // 取余 | 模运算符
        carry = Math.floor(sum / 10) // Math.floor向下取整 ~ Math.ceil()向上取整
        curr = curr.next
      }

      if (carry > 0) {
        curr.next = new ListNode(carry)
      }
      return dummy.next
    }

    // 创建单向链表
    export class ListNode {
      constructor (val) {
        this.val = val
        this.next = undefined
      }
    }

    // 创建非空链表
    import { ListNode } from './ListNode.js'
    let l1 = new ListNode(2)
    let dummy1 = l1
    dummy1.next = new ListNode(4); dummy1 = dummy1.next
    dummy1.next = new ListNode(3); dummy1 = dummy1.next

    let l2 = new ListNode(5)
    let dummy2 = l2
    dummy2.next = new ListNode(6); dummy2 = dummy2.next
    dummy2.next = new ListNode(4); dummy2 = dummy2.next

    console.log(l1)
    console.log(l2)
            `
          }
        ]
      },
      {
        id: '3-2',
        grade: '2',
        title: '两两交换链表中的节点',
        details: [
          {
            html: `
            <h1>题目：两两交换链表中的节点</h1>
            <h4>描述：给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。你不能知识单纯的改变节点内部的值，而是需要实际的进行节点的交换。</h4>
            <p>思路：在给定的链表前面添加一个假节点，使用while遍历链表使其相邻两两节点进行交换。</p>
            `,
            highLight: `
    /**
     * 两两交换链表中的节点
     * @param {*} l1
     *
     * 输入 1 -> 2 -> 3 -> 4
     * 输出 2 -> 1 -> 4 -> 3
     */
    import { ListNode } from './ListNode'
    export const swapPairs = function (l1) {
      let dummy = new ListNode()
      dummy.next = l1
      let current = dummy
      while (current.next !== null && current.next.next !== null) {
        let n1 = current.next
        let n2 = current.next.next
        current.next = n2
        n1.next = n2.next
        n2.next = n1
        current = n1
      }
      return dummy.next
    }
            `
          }
        ]
      },
      {
        id: '3-3',
        grade: '2',
        title: '反转链表',
        details: [
          {
            html: `
              <h1>题目：反转链表</h1>
              <h4>描述：反转一个单链表</h4>
              <p>思路：可以迭代或者递归地反转链表</p>
            `,
            highLight: `
    /**
     * 反转链表
     * @param {*} head
     *
     * 输入 1 -> 2 -> 3 -> 4 -> 5 -> null
     * 输出 5 -> 4 -> 3 -> 2 -> 1 -> null
     */

    export const reverseList = function (head) {
      let prev = null
      let curr = head
      // 基础
      // let next = head
      // while (curr != null) {
      //   next = curr.next
      //   curr.next = prev
      //   prev = curr
      //   curr = next
      // }

      // 优化 - 利用解构赋值
      while (curr != null) {
        [curr.next, prev, curr] = [prev, curr, curr.next]
      }
      return prev
    }
            `
          },
          {
            html: `
              <h1>题目：根据位置反转链表</h1>
              <h4>描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转</h4>
              <p>思路：反转 m 到 n 之间的链表，将反转后的链表与原链表拼接</p>
            `,
            highLight: `
    /**
     * 反转链表
     * @param {*} head
     * @param {*} m = 2 开始位置
     * @param {*} n = 4 结束位置
     *
     * 输入 1 -> 2 -> 3 -> 4 -> 5 -> null
     * 输出 1 -> 4 -> 3 -> 2 -> 5 -> null
     */

    export const reverseBetween = function (head, m, n) {
      let prev = null
      let curr = head
      let next = head
      // 移动到m开始位置
      for (let i = 1; i < m; i++) { // 移动到m开始位置
        prev = curr
        curr = curr.next
      }
      // 占位
      // debugger
      let prev2 = prev
      let curr2 = curr
      // 反转
      for (let i = m; i <= n; i++) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
      // 优化 - 利用解构赋值
      // for (let i = m; i <= n; i++) {
      //   [curr.next, prev, curr] = [prev, curr, curr.next]
      // }
      // 拼接
      if (prev2 != null) {
        prev2.next = prev
      } else {
        head = prev
      }
      curr2.next = curr
      return head
    }
            `
          }
        ]
      }
    ]
  },
  {
    id: '4',
    icon: 'el-icon-star-on',
    title: '需透彻题',
    children: [
      {
        id: '4-1',
        grade: '2',
        title: '重复的DNA序列',
        details: [
          {
            html: `
              <h1>题目：重复的DNA序列</h1>
              <h4>描述：所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成。例如，'ACGAATTCCG'。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。缩写一个函数来查找目标子串，目标子串的长度为 10，且在DNA字符串 s 中出现次数超过一次。</h4>
              <p>思路：使用Map对象存储长度为10的字串，{ 字串：出现次数 }，for循环长度-10的操作。</p>
            `,
            highLight: `
    /**
     * 重复的DNA序列
     * @param {*} str
     *
     * 输入 ste = 'AAAAACCCCCAAAAACCCCCAAAAAGGGTTT'
     * 输出 ['AAAAACCCCC', 'CCCCCAAAAA']
     * 原因 数组中的值重复出现两次
     */

    export const findRepeatedDnaSequences = function (str) {
      let map = new Map()
      let arr = []
      for (let i = 0; i <= str.length - 10; i++) {
        let sub = str.substring(i, i + 10)
        if (!map.has(sub)) {
          map.set(sub, 1)
        } else if (map.get(sub) === 1) {
          map.set(sub, 2)
          arr.push(sub)
        } else {
          map.set(sub, map.get(sub) + 1)
        }
      }
      console.log(map)
      return arr
    }
            `
          }
        ]
      },
      {
        id: '4-2',
        grade: '2',
        title: '检查是否是回文数',
        details: [
          {
            html: `
              <h1>题目：检查是否是回文数</h1>
              <h4>描述：给你一个整数 x，如果 x 是一个回文整数，返回true；否则，返回false。 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。</h4>
              <p>思路：1、可以使用字符串反转判断（基础） 2、可以使用整数反转判断（优化）</p>
            `,
            highLight: `
    /**
     * 回文数
     * @param {number} x
     * @return {boolean}
     */
    // 基础使用字符串
    export const isPalindrome1 = function (x) {
      return x.toString() === x.toString().split('').reverse().join('')
    }

    // 优化使用数字反转 将整数求模得到尾数，之后每求一次模，都再原数上添加一位(通过*10来得到）
    export const isPalindrome2 = function (x) {
      if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false
      } else if (x >= 0 && x < 10) {
        return true
      }
      let y = x
      let num = 0
      while (x !== 0) {
        num = x % 10 + num * 10
        x = Math.floor(x / 10)
      }
      return y === num
    }
            `
          }
        ]
      },
      {
        id: '4-3',
        grade: '2',
        title: '构造无穷斐波那契数列',
        details: [
          {
            html: `
              <h1>题目：生成器构造无穷斐波那契数列</h1>
            `,
            highLight: `
    function* fibonacci(){
      let a = 1, b = 1
      yield a
      yield b
      while(true){
          const t = b
          b = a + b
          a = t
          yield b    
      }
    }
    const it = fibonacci()
    const feb10 = Array.from(Array(10), it.next, it).map(x => x.value))
    console.log(feb10) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
            `
          },
          {
            html: `
              <h1>题目：递归实现斐波那契数列的值</h1>
            `,
            highLight: `
    function fibonacci(n){
      let [a, b] = [0, 1]
      for(let i = 0; i < n; i++){
          [a, b] = [b, a + b]    
      }
      return b
    }
    
    function fibonacci(n){
        return Array(n).fill().reduce(([a, b], _) =>{
            return [b, a + b]    
        }, [0, 1])[1]
    }
            `
          }
        ]
      },
      {
        id: '4-4',
        grade: '2',
        title: '柯里化',
        details: [
          {
            html: `
        <h1>题目：柯里化</h1>
        <h4>描述：对于curry(foo)，g函数参数足够4个，就调用foo(a,b,c,d)，如果小于4个就返回一个可以继续累计参数的函数</h4>
      `,
            highLight: `
    const curry = func => {
      const g = (...allArgs) => allArgs.length >= func.length ?
        func(...allArgs) : (...args) => g(...allArgs, ...args)
    }
    
    const foo = curry((a,b,c,d) => {
      console.log(a,b,c,d)
    })
    
    foo(1)(2)(3)(4) // 1 2 3 4
    foo(1)(2)(3) // 不返回
    const f = foo(1)(2)(3)
    f(5) // 1 2 3 5
            `
          },
          {
            html: `
              <h1>题目：Y组合子实现柯里化</h1>
            `,
            highLight: `
    const y = function(le){
      return function(f){
        return(f)    
      }(function (f){
        return le{
            function(...x){
              return (f(f))(...x)            
            }        
        }    
      })
    }
    
    const curryY = func => y{
      g => {
        (...allArgs) => {
          allArgs.length >= func.length ? func(...allArgs) : (...args) => g(...allArgs, ...args)                                    
        }    
      }
    }
    
    const foo = curryY((a,b,c,d) => {
      console.log(a,b,c,d)
    })
    
    foo(1)(2)(3)(4)  // 1 2 3 4
            `
          }
        ]
      },
      {
        id: '4-5',
        grade: '2',
        title: '笛卡尔积',
        details: [
          {
            html: `
        <h1>题目：笛卡尔积</h1>
        <h4>描述：集合 X 和 Y 的笛卡尔积，可以表示为：X × Y = { (x, y) | ∈ X ∧ y ∈ Y }，写一个函数，求数组的笛卡尔积</h4>
        <p>思路：[1, 2] × ['a', 'b'] = [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]</p>
      `,
            highLight: `
    function cartesian_product(...Matrix){
      if(Matrix.length === 0) return {}
      if(Matrix.length === 1) return Matrix[0]
      return Matrix.reduce(A, B) => {
        const product = []
        for(let i = 0; i < A.length; i++){
          for(let j = 0; j < B.length; j++){
              product.push(
                  Array.isArray(A[i]) ? [...A[i], B[j]] : [A[i], B[j]]                
              )            
          }    
          return product    
        }    
      }
    }
            `
          }
        ]
      }
    ]
  }
]

// {
//   id: '',
//   grade: '2',
//   title: '',
//   details: [
//     {
//       html: `
//         <h1>题目：</h1>
//         <h4>描述：</h4>
//         <p>思路：</p>
//       `,
//       highLight: ``
//     }
//   ]
// }
