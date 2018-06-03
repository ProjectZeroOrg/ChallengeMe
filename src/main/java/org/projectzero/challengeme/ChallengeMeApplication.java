package org.projectzero.challengeme;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.Arrays;

@SpringBootApplication
@EnableOAuth2Sso
public class ChallengeMeApplication extends WebSecurityConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(ChallengeMeApplication.class, args);
	}

  @Value("${security.auth-trust-store}")
  public void setupTrustedSsl(String authTrustStore) {
    System.setProperty("javax.net.ssl.trustStore", authTrustStore);
  }

  @Value("${security.trusted-ssl-hosts:46.249.93.103}")
	public void setTrustedSslHosts(String trustedSslHosts) {
    javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier(
      (hostname, sslSession) -> Arrays.stream(trustedSslHosts.split(","))
        .anyMatch(hostname::contains));
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // @formatter:off
    http
      .logout().and()
      .authorizeRequests()
        .antMatchers("/", "/login", "/index.html", "/actuator/**",
          "/*.js", "/*.css", "/*.ico", "/*.png", "/*image**")
        .permitAll()
        .anyRequest().authenticated();
    // @formatter:on
  }
}
