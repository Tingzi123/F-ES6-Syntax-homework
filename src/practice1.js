const parseData = (input) => {
    const { data, column } = input;
    const keys = column.map(e => e.name);
    return data.map(e=>{
        const obj={}
        keys.map((key,value)=>{
            obj[key]=e[value]
        })
        return obj;
    })
  };

export { parseData };