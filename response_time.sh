#!/bin/bash
while read domain;  
  do  { echo -n [$(date +%s000),; curl $domain -L -k -o /dev/null -w '%{time_total}],'; } >> `date +"%Y"`-test.json ; 
done <domains.txt
