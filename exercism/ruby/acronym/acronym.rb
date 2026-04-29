class Acronym
  def self.abbreviate(string)
    string.split(/[^a-zA-Z]+/).reject(&:empty?).map { |word| word[0].upcase }.join
  end
end
