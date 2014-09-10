package com.google.map.sample.config;

import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebMvc
public class HeaderAppConfig extends WebMvcConfigurerAdapter {
//	Spring Default, meaning no cache of previous pages will be available
//	Cache-Control: no-cache, no-store, max-age=0, must-revalidate
//	Pragma: no-cache
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            .addResourceHandler("/resources/**")
            .addResourceLocations("/resources/")
            .setCachePeriod(31556926);
    }
}
