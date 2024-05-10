<?php

class Lasagna
{
    const timePerLayer = 2;

    public function expectedCookTime(): int
    {
      return 40;
    }

    public function remainingCookTime($elapsed_minutes): int
    {
      return $this->expectedCookTime() - $elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep): int
    {
      return $layers_to_prep * self::timePerLayer;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes): int
    {
      return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    public function alarm(): string
    {
      $message = "Ding!";
      return $message;
    }
}
