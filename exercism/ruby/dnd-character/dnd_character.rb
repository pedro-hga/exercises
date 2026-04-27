class DndCharacter
  attr_reader :strength, :dexterity, :constitution,
              :intelligence, :wisdom, :charisma, :hitpoints

  def self.modifier(score)
    (score - 10) / 2
  end

  def initialize
    @strength     = roll_dice
    @dexterity    = roll_dice
    @constitution = roll_dice
    @intelligence = roll_dice
    @wisdom       = roll_dice
    @charisma     = roll_dice
    @hitpoints    = 10 + DndCharacter.modifier(@constitution)
  end

  def roll_dice
    rolls = Array.new(4) { rand(1..6) }
    rolls.sum - rolls.min
  end
end
