<?php

class PizzaPi
{
    const SAUCE_CAN = 250;
    const SAUCE_PER_PIZZA = 125;

    public function calculateDoughRequirement($pizzas, $people)
    {
      return ceil($pizzas * (($people * 20) + 200));
    }

    public function calculateSauceRequirement($pizzas)
    {
      return ceil(($pizzas * self::SAUCE_PER_PIZZA) / self::SAUCE_CAN);
    }

    public function calculateCheeseCubeCoverage($side, $thickness, $diameter)
    {
      return floor(($side ** 3) / ($thickness * pi() * $diameter));
    }

    public function calculateLeftOverSlices($pizzas, $people)
    {
      return ($pizzas * 8) % $people;
    }
}
