class AssemblyLine
  def initialize(speed)
    @speed = speed
  end
  
  def production_rate_per_hour
    if @speed.between?(1,4) 
      (221 * @speed).to_f
    elsif @speed.between?(5,8)
      ( (221 * @speed) * 0.9 ).to_f
    elsif @speed == 9
      ( (221 * @speed) * 0.8 ).to_f
    elsif @speed == 10
      ( (221 * @speed) * 0.77).to_f
    end
    
  end
  
  def working_items_per_minute
    ( production_rate_per_hour / 60 ).to_i
  end
end
