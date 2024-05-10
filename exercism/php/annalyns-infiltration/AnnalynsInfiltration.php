<?php

class AnnalynsInfiltration
{
    public function canFastAttack($is_knight_awake)
    {
      return $is_knight_awake ? false : true;
    }

    public function canSpy(
        $is_knight_awake,
        $is_archer_awake,
        $is_prisoner_awake
    ) {
      if ($is_knight_awake || $is_archer_awake || $is_prisoner_awake) {
        return true;
      } else {
        return false;
      }
    }

    public function canSignal(
        $is_archer_awake,
        $is_prisoner_awake
    ) {
      if ($is_archer_awake == false && $is_prisoner_awake) {
        return true;
      } else {
        return false;
      }
    }

    public function canLiberate(
        $is_knight_awake,
        $is_archer_awake,
        $is_prisoner_awake,
        $is_dog_present
    ) {

      if ($is_dog_present) {
        return !$is_archer_awake;
      } else {
        if (!$is_prisoner_awake) return false;
        return (!$is_archer_awake && !$is_knight_awake);
      }
    }
}
