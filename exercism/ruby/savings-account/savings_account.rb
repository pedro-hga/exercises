module SavingsAccount
  def self.interest_rate(balance)
    case balance
    when 0.0...1000.0
      0.5
    when 1000.0...5000.0
      1.621
    when 5000.0..Float::INFINITY
      2.475
    else 
      3.213
    end
  end

  def self.annual_balance_update(balance)
    interest_rate = (self.interest_rate(balance) / 100) + 1
    updated_balance = balance * interest_rate
  end

  def self.years_before_desired_balance(current_balance, desired_balance)
    years = 0
    while current_balance < desired_balance
      current_balance = annual_balance_update(current_balance)
      years += 1
    end
    years
  end
end
