/**
 * micro-classnames utility
 * conditionally joining class names
 * inspired by http://jedwatson.github.io/classnames/
 * alternative https://github.com/lukeed/clsx
 *
 * Copyright (c) 2019 Can Rau (canrau.com)
 * Licensed under the MIT License (MIT)
 */

export const cx = classNames => {
  const classes =
    typeof classNames === `string` ? classNames.split(` `) : classNames
  if (!classes) return ``
  return classes.reduce((acc, val) => {
    if (val && typeof val === `string`) acc = `${acc} ${val}`
    if (val && typeof val === `object` && Object.keys(val)) {
      const keys = Object.keys(val)
      const toggled = keys.reduce(
        (ac, key) => (val[key] ? ac.concat(` ${key}`) : ac),
        ``
      )
      if (toggled) acc = acc.concat(` ${toggled}`)
    }
    return acc
      .replace(/\s{2,}/g, ` `) // remove duplicate white-space
      .trim() // trim start & end
  }, ``)
}
