export const timeElapsed = (createdAt: string) => {
    const createdTime = new Date(createdAt).getTime();
    
    const diff = Date.now() - createdTime;
    
  const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
        return `${minutes} min`;
  }
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) {
        return `${hours} hr`;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 30) {
        return `${days} d`;
  }

  const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} mo`;
  }

  const years = Math.floor(months / 12);
    return `${years} yr`;
    
}