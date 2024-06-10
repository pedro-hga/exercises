module Port
  Port::IDENTIFIER = :PALE

  def self.get_identifier(city)
    city.slice(0, 4).upcase.to_sym
  end

  def self.get_terminal(ship_identifier)
    case
    when ship_identifier.slice(0, 3) == "OIL" || ship_identifier.slice(0, 3) == "GAS"
      :A
    else
      :B
    end
  end
end
