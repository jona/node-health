FROM node:0.12.2-onbuild

RUN npm install -g mocha

CMD ["mocha"]
