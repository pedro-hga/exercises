<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
      $cleanedString = trim($name);
      return $cleanedString[0];
    }

    public function initial(string $name): string
    {
      return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
      $nameArr = explode(" ", $name);
      return $this->initial($nameArr[0]) . " " . $this->initial($nameArr[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        return  <<<HEART
             ******       ******
           **      **   **      **
         **         ** **         **
        **            *            **
        **                         **
        **     $initials_a  +  $initials_b     **
         **                       **
           **                   **
             **               **
               **           **
                 **       **
                   **   **
                     ***
                      *
        HEART;
    }
}
