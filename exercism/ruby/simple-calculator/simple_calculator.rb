class SimpleCalculator
  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  class UnsupportedOperation < StandardError; end

  def self.calculate(_first_operand, _second_operand, _operation)
    raise UnsupportedOperation, "Unsupported operation: #{_operation}" unless ALLOWED_OPERATIONS.include?(_operation)
    unless _first_operand.is_a?(Integer) && _second_operand.is_a?(Integer)
      raise ArgumentError,
            'Both operands must be Integers'
    end
    return 'Division by zero is not allowed.' if _operation == '/' && _second_operand == 0

    "#{_first_operand} #{_operation} #{_second_operand} = #{_first_operand.public_send(_operation, _second_operand)}"
  end
end
