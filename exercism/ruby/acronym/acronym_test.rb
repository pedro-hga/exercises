require "minitest/autorun"
require_relative "acronym"

class AcronymTest < Minitest::Test
  def test_basic
    result = Acronym.abbreviate("Portable Network Graphics")
    puts result
    assert_equal "PNG", result
  end

  def test_lowercase_words
    result = Acronym.abbreviate("Ruby on Rails")
    puts result
    assert_equal "ROR", result
  end

  def test_punctuation
    result = Acronym.abbreviate("First In, First Out")
    puts result
    assert_equal "FIFO", result
  end

  def test_all_caps_word
    result = Acronym.abbreviate("GNU Image Manipulation Program")
    puts result
    assert_equal "GIMP", result
  end

  def test_punctuation_without_whitespace
    result = Acronym.abbreviate("Complementary metal-oxide semiconductor")
    puts result
    assert_equal "CMOS", result
  end

  def test_very_long_abbreviation
    assert_equal "ROTFLSHTMDCOALM",
      Acronym.abbreviate("Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me")
  end

  def test_consecutive_delimiters
    assert_equal "SIMUFTA", Acronym.abbreviate("Something - I made up from thin air")
  end
end
