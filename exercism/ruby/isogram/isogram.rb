def isogram?(str)
  return true if str.empty?

  chars = {}
  str.downcase.each_char do |char|
    return false if chars.include?(char)
    next if char =~ /[[:space:]]/ || char =~ /[[:punct:]]/

    chars[char] = 1
  end
  true
end
