export const formatAge = (age: number): string => {
  if (age === 1) {
    return `${age} год`
  } else if (age >= 5 && age <= 20) {
    return `${age} лет`
  } else {
    const lastDigit = age % 10
    if (lastDigit === 1) {
      return `${age} год`
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return `${age} года`
    } else {
      return `${age} лет`
    }
  }
}
