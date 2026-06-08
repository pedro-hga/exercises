module Chess
  RANKS = (1..8)
  FILES = ("A".."H")

  def self.valid_square?(rank, file)
    RANKS.include?(rank) && FILES.include?(file)
  end

  def self.nickname(first_name, last_name)
    "#{first_name[0, 2].upcase}#{last_name[-2, 2].upcase}"
  end

  def self.move_message(first_name, last_name, square)
    player = nickname(first_name, last_name)

    file, rank = square.chars

    if valid_square?(rank.to_i, file)
      "#{player} moved to #{square}"
    else
      "#{player} attempted to move to #{square}, but that is not a valid square"
    end
  end
end
