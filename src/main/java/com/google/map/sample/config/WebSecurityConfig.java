package com.google.map.sample.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends
   WebSecurityConfigurerAdapter {
	//This is using Spring security directly to configure cache control, no MVC/Web is needed
	//Must add this to the filter in order to initialize it
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .headers()
        .cacheControl()
        .and();
  }
}
