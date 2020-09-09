function mainQueue() {
    const treckQ = new Queue()
    treckQ.enqueue('Kirk')
    treckQ.enqueue('Spock')
    treckQ.enqueue('Uhura')
    treckQ.enqueue('Sulu')
    treckQ.enqueue('Checkov')
  
    console.log(peekQ(treckQ))
    console.log(empty(treckQ))
    displayQ(treckQ)
    treckQ.dequeue()
  
    const treckDQ = new DoubleQueue()
    treckDQ.enqueue('Kirk')
    treckDQ.enqueue('Spock')
    treckDQ.enqueue('Uhura')
    treckDQ.enqueue('Sulu')
    treckDQ.enqueue('Checkov')
    console.log(peekQ(treckDQ))
    displayQ(treckDQ)
  }
  
  mainQueue()

  function peekQ(q) {
    return q.first
  }
  
  function empty(q) {
    if (qlfirst === null) {
      return true
    }
    return false
  }
  
  function displayQ(q) {
    let node = q.first
    while (node !== q.last) {
      console.log(node.value)
      node = node.next
    }
    console.log(node.value)
  }


  function squareDance() {
    const maleDancers = new Queue()
    const femaleDancers = new Queue()
  
    function dancers(person) {
      if (person.gender === 'm') maleDancers.enqueue(person.value)
      if (person.gender === 'f') femaleDancers.enqueue(person.value)
    }
  
    function dance(m, f) {
      while (!empty(m) && !empty(f)) {
        mPerson = m.dequeue()
        fPerson = f.dequeue()
        console.log(mPerson + ' and ' + fPerson)
      }
    }
  
    dancers({value: 'Jane', gender: 'f'})
    dancers({value: 'Frank', gender: 'm'})
    dancers({value: 'John', gender: 'm'})
    dancers({value: 'Sherlock', gender: 'm'})
    dancers({value: 'Madonna', gender: 'f'})
    dancers({value: 'David', gender: 'm'})
    dancers({value: 'Christopher', gender: 'm'})
    dancers({value: 'Beyonce', gender: 'f'})
  
    dance(maleDancers, femaleDancers)
  }
  
  squareDance()

  function bank(queue) {
    let paperworkisgood = Math.floor(Math.random() * 100)
    
    if(paperworkisgood > 25) {
      return queue.dequeue()
    } else {
      let paperworkisbad = queue.dequeue()
      queue.enqueue(paperworkisbad)
      return 'Paperwork incomplete, try again later'
    }
  }