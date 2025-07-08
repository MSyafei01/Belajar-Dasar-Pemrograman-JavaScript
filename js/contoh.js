        // Data biodata (bisa diganti dengan data dinamis dari API)
        const biodata = {
            name: "SYABAQI",
            fullName: "Mochamad Syafei Bayan R",
            title: "Web Developer & Designer",
            birthDate: "111 Januari 2020",
            address: "Jember, Indonesia",
            email: "syabaqikeren@gmail.com",
            phone: "+62 812-0011-0022",
            education: "D4 Teknik Informatika - POLIYEY ASIK",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "UI/UX Design", "Git"],
            about: "Saya seorang biasa yang sedang belajar ulang pembelajaran yang dari kampus untuk bisa menguasai beberapa code yang sudah saya lupakan juga saya pelajari kembali ternyata belajar pemprograman seru banget."
        };

        // Fungsi untuk mengisi data biodata
        function fillBiodata() {
            document.getElementById('name').textContent = biodata.name;
            document.getElementById('fullName').textContent = biodata.fullName;
            document.getElementById('title').textContent = biodata.title;
            document.getElementById('birthDate').textContent = biodata.birthDate;
            document.getElementById('address').textContent = biodata.address;
            document.getElementById('email').textContent = biodata.email;
            document.getElementById('phone').textContent = biodata.phone;
            document.getElementById('education').textContent = biodata.education;
            document.getElementById('aboutText').textContent = biodata.about;
            document.getElementById('footerName').textContent = biodata.name;
            
            // Isi skills
            const skillsContainer = document.getElementById('skillsContainer');
            biodata.skills.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill';
                skillElement.textContent = skill;
                skillsContainer.appendChild(skillElement);
            });
            
            // Isi tahun sekarang
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        }

        // Fungsi untuk dark mode
        function setupDarkMode() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
            
            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                
                if (body.classList.contains('dark-mode')) {
                    // Apply dark mode styles
                    body.style.backgroundColor = '#1a1a1a';
                    document.querySelector('.container').style.backgroundColor = '#2d2d2d';
                    document.querySelector('.container').style.color = '#f0f0f0';
                    document.querySelector('.header').style.background = 'linear-gradient(135deg, #2c3e50, #4a6bff)';
                    darkModeToggle.textContent = '🌞';
                } else {
                    // Revert to light mode
                    body.style.backgroundColor = '#f5f7ff';
                    document.querySelector('.container').style.backgroundColor = 'white';
                    document.querySelector('.container').style.color = '#2c3e50';
                    document.querySelector('.header').style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                    darkModeToggle.textContent = '🌓';
                }
            });
        }
                /*
        // Fungsi untuk mengubah gambar profil secara acak (demo)
        function changeProfileImage() {
            const randomGender = Math.random() > 0.5 ? 'men' : 'women';
            const randomId = Math.floor(Math.random() * 100);
            document.getElementById('profileImg').src = `https://randomuser.me/api/portraits/${randomGender}/${randomId}.jpg`;
        }
                */
                
        // Inisialisasi saat halaman dimuat
        window.addEventListener('DOMContentLoaded', () => {
            fillBiodata();
            setupDarkMode();
            
            // Demo: klik gambar profil untuk mengubah (opsional)
            document.getElementById('profileImg').addEventListener('click', changeProfileImage);
        });
            