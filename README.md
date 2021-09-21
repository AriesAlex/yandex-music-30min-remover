# Убирает ограничение на воспроизведение в фоне на 30 минут. Хорошо сочетается с блокировщиками рекламы типа Adguard.

## Инструкция
1. Устанавливаем расширение [Requestly](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa)
  

2. Создаём следующие правила:
  
![](tutorial/1.png)
  
![](tutorial/2.png)
  
![](tutorial/3.png)
  
![](tutorial/4.png)
  
Скопировать:
```
Content-Security-Policy

default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';

content-type

text/javascript

https://raw.githubusercontent.com/AriesAlex/yandex-music-30min-remover/master/index.js

https://music.yandex.ru/index.js
```


## Fiddler
Есть готовое правило для прокси-сервера Fiddler - **fiddler.farx**