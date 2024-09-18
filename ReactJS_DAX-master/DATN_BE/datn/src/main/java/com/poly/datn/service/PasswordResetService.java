package com.poly.datn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.poly.datn.entities.PasswordResetToken;
import com.poly.datn.entities.Users;
import com.poly.datn.repository.PasswordResetTokenRepository;
import com.poly.datn.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class PasswordResetService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void generatePasswordResetToken(String email) {
        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Email không tồn tại"));

        String token = UUID.randomUUID().toString();
        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setUser(user);
        resetToken.setToken(token);
        resetToken.setExpiryDate(LocalDateTime.now().plusHours(1)); // Đặt thời gian hết hạn cho mã xác thực

        passwordResetTokenRepository.save(resetToken);

        String resetLink = "http://localhost:5179/reset-password?token=" + token;
        String emailContent = "Click vào liên kết để đặt lại mật khẩu của bạn: " + resetLink;
        emailService.sendEmail(user.getEmail(), "Đặt lại mật khẩu", emailContent);
    }

    public void resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("Mã xác thực không hợp lệ"));

        if (resetToken.isExpired()) {
            throw new IllegalArgumentException("Mã xác thực đã hết hạn");
        }

        Users user = resetToken.getUser();
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        // Xóa mã xác thực sau khi sử dụng
        passwordResetTokenRepository.delete(resetToken);
    }

    public Users findByToken(String token) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(token)
                .orElse(null);
        if (resetToken != null) {
            return resetToken.getUser(); // Lấy người dùng liên kết với token
        }
        return null;
    }

    @Transactional
    public void deleteByToken(String token) {
        Optional<PasswordResetToken> resetToken = passwordResetTokenRepository.findByToken(token);
        resetToken.ifPresent(passwordResetTokenRepository::delete);
    }
}
