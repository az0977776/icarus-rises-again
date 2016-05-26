var hostname = {'149.89.150.132': 'cslab-132', '149.89.150.126': 'cslab1-26', '149.89.150.124': 'cslab1-24', '149.89.150.125': 'cslab1-25', '149.89.150.108': 'cslab1-8', '149.89.150.109': 'cslab1-9', '149.89.150.120': 'cslab1-20', '149.89.150.121': 'cslab1-21', '149.89.150.122': 'cslab1-22', '149.89.150.123': 'cslab1-23', '149.89.150.102': 'cslab1-2', '149.89.150.103': 'cslab1-3', '149.89.150.100': 'homer', '149.89.150.101': 'cslab1-1', '149.89.150.106': 'cslab1-6', '149.89.150.107': 'cslab1-7', '149.89.150.104': 'cslab1-4', '149.89.150.105': 'cslab1-5', '149.89.150.127': 'cslab1-27', '149.89.150.128': 'cslab1-28', '149.89.150.129': 'cslab1-29', 
'149.89.150.119': 'cslab1-19', '149.89.150.118': 'cslab1-18', '149.89.150.131': 'cslab1-31', '149.89.150.130': 'cslab1-30', '149.89.150.111': 'cslab1-11', '149.89.150.110': 'cslab1-10', '149.89.150.113': 'cslab1-13', '149.89.150.112': 'cslab1-12', '149.89.150.115': 'cslab1-15', '149.89.150.114': 'cslab1-14', '149.89.150.117': 'cslab1-17', '149.89.150.116': 'cslab1-16'};

var version = {'149.89.150.132': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.126': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.124': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.125': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.108': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.109': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', 
'149.89.150.120': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.121': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.122': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.123': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.102': 'Linux version 3.13.0-32-generic (buildd@kissel) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #57-Ubuntu SMP Tue Jul 15 03:51:08 UTC 2014', '149.89.150.103': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', 
'149.89.150.100': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.101': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.106': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.107': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.104': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.105': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.127': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.128': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', 
'149.89.150.129': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.119': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.118': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.131': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.130': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.111': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.110': 'Linux version 3.13.0-32-generic (buildd@kissel) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #57-Ubuntu SMP Tue Jul 15 03:51:08 UTC 2014', '149.89.150.113': 'Linux version 3.13.0-36-generic (buildd@toyol) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #63-Ubuntu SMP Wed Sep 3 21:30:07 UTC 2014', '149.89.150.112': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.115': 'Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016', '149.89.150.114': 'Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016', '149.89.150.117': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016', '149.89.150.116': 'Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016'}

var compType = {'149.89.150.132': 'LENOVO', '149.89.150.126': 'LENOVO', '149.89.150.124': 'LENOVO', '149.89.150.125': 'LENOVO', '149.89.150.108': 'LENOVO', '149.89.150.109': 'LENOVO', '149.89.150.120': 'LENOVO', '149.89.150.121': 'LENOVO', '149.89.150.122': 'LENOVO', '149.89.150.123': 'LENOVO', '149.89.150.102': 'LENOVO', '149.89.150.103': 'LENOVO', '149.89.150.100': 'LENOVO', '149.89.150.101': 'LENOVO', '149.89.150.106': 'LENOVO', '149.89.150.107': 'LENOVO', '149.89.150.104': 'LENOVO', '149.89.150.105': 'LENOVO', '149.89.150.127': 'LENOVO', '149.89.150.128': 'LENOVO', 
'149.89.150.129': 'LENOVO', '149.89.150.119': 'LENOVO', '149.89.150.118': 'LENOVO', '149.89.150.131': 'LENOVO', '149.89.150.130': 'LENOVO', '149.89.150.111': 'LENOVO', '149.89.150.110': 'LENOVO', '149.89.150.113': 'LENOVO', '149.89.150.112': 'LENOVO', '149.89.150.115': 'LENOVO', '149.89.150.114': 'LENOVO', '149.89.150.117': 'LENOVO', '149.89.150.116': 'LENOVO'};