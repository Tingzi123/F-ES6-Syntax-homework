const inject = (items, sections) => {
    let result  = [...items]
    sections.forEach((section, index) => {
        result.splice(section.index + index, 0, section.content)
    })
    return result
  }
export { inject };
