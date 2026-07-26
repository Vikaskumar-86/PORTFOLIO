import { useState, useEffect } from 'react';

export function useTypingEffect(
  words: string[],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentFullWord = words[wordIndex % words.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));

        if (currentText === currentFullWord) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting backward
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}
