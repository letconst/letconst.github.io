FROM jekyll/jekyll:pages

COPY Gemfile /srv/jekyll

WORKDIR /srv/jekyll

RUN apk update && \
    apk add ruby-dev build-base

RUN bundle install

EXPOSE 4000