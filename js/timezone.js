
        const countrySelect = document.getElementById("country");
        const timezoneSelect = document.getElementById("timezone");
        const timeDisplay = document.getElementById("time");

        const countries = [
            { name: "Afghanistan", code: "AF", timezones: ["Asia/Kabul"] },
            { name: "Albania", code: "AL", timezones: ["Europe/Tirane"] },
            { name: "Algeria", code: "DZ", timezones: ["Africa/Algiers"] },
            { name: "Andorra", code: "AD", timezones: ["Europe/Andorra"] },
            { name: "Angola", code: "AO", timezones: ["Africa/Luanda"] },
            { name: "Argentina", code: "AR", timezones: ["America/Argentina/Buenos_Aires"] },
            { name: "Armenia", code: "AM", timezones: ["Asia/Yerevan"] },
            { name: "Australia", code: "AU", timezones: ["Australia/Sydney", "Australia/Perth"] },
            { name: "Austria", code: "AT", timezones: ["Europe/Vienna"] },
            { name: "Azerbaijan", code: "AZ", timezones: ["Asia/Baku"] },
            { name: "Bahamas", code: "BS", timezones: ["America/Nassau"] },
            { name: "Bahrain", code: "BH", timezones: ["Asia/Bahrain"] },
            { name: "Bangladesh", code: "BD", timezones: ["Asia/Dhaka"] },
            { name: "Barbados", code: "BB", timezones: ["America/Barbados"] },
            { name: "Belarus", code: "BY", timezones: ["Europe/Minsk"] },
            { name: "Belgium", code: "BE", timezones: ["Europe/Brussels"] },
            { name: "Belize", code: "BZ", timezones: ["America/Belize"] },
            { name: "Benin", code: "BJ", timezones: ["Africa/Porto-Novo"] },
            { name: "Bhutan", code: "BT", timezones: ["Asia/Thimphu"] },
            { name: "Bolivia", code: "BO", timezones: ["America/La_Paz"] },
            { name: "Bosnia and Herzegovina", code: "BA", timezones: ["Europe/Sarajevo"] },
            { name: "Botswana", code: "BW", timezones: ["Africa/Gaborone"] },
            { name: "Brazil", code: "BR", timezones: ["America/Sao_Paulo", "America/Manaus", "America/Cuiaba"] },
            { name: "Brunei", code: "BN", timezones: ["Asia/Brunei"] },
            { name: "Bulgaria", code: "BG", timezones: ["Europe/Sofia"] },
            { name: "Burkina Faso", code: "BF", timezones: ["Africa/Ouagadougou"] },
            { name: "Burundi", code: "BI", timezones: ["Africa/Bujumbura"] },
            { name: "Cambodia", code: "KH", timezones: ["Asia/Phnom_Penh"] },
            { name: "Cameroon", code: "CM", timezones: ["Africa/Douala"] },
            { name: "Canada", code: "CA", timezones: ["America/Toronto", "America/Vancouver", "America/Winnipeg", "America/Halifax"] },
            { name: "Cape Verde", code: "CV", timezones: ["Atlantic/Cape_Verde"] },
            { name: "Central African Republic", code: "CF", timezones: ["Africa/Bangui"] },
            { name: "Chad", code: "TD", timezones: ["Africa/Ndjamena"] },
            { name: "Chile", code: "CL", timezones: ["America/Santiago"] },
            { name: "China", code: "CN", timezones: ["Asia/Shanghai"] },
            { name: "Colombia", code: "CO", timezones: ["America/Bogota"] },
            { name: "Comoros", code: "KM", timezones: ["Indian/Comoro"] },
            { name: "Congo", code: "CG", timezones: ["Africa/Brazzaville"] },
            { name: "Costa Rica", code: "CR", timezones: ["America/Costa_Rica"] },
            { name: "Croatia", code: "HR", timezones: ["Europe/Zagreb"] },
            { name: "Cuba", code: "CU", timezones: ["America/Havana"] },
            { name: "Cyprus", code: "CY", timezones: ["Asia/Nicosia"] },
            { name: "Czech Republic", code: "CZ", timezones: ["Europe/Prague"] },
            { name: "Denmark", code: "DK", timezones: ["Europe/Copenhagen"] },
            { name: "Djibouti", code: "DJ", timezones: ["Africa/Djibouti"] },
            { name: "Dominica", code: "DM", timezones: ["America/Dominica"] },
            { name: "Dominican Republic", code: "DO", timezones: ["America/Santo_Domingo"] },
            { name: "Ecuador", code: "EC", timezones: ["America/Guayaquil"] },
            { name: "Egypt", code: "EG", timezones: ["Africa/Cairo"] },
            { name: "El Salvador", code: "SV", timezones: ["America/El_Salvador"] },
            { name: "Equatorial Guinea", code: "GQ", timezones: ["Africa/Malabo"] },
            { name: "Eritrea", code: "ER", timezones: ["Africa/Asmara"] },
            { name: "Estonia", code: "EE", timezones: ["Europe/Tallinn"] },
            { name: "Eswatini", code: "SZ", timezones: ["Africa/Mbabane"] },
            { name: "Ethiopia", code: "ET", timezones: ["Africa/Addis_Ababa"] },
            { name: "Fiji", code: "FJ", timezones: ["Pacific/Fiji"] },
            { name: "Finland", code: "FI", timezones: ["Europe/Helsinki"] },
            { name: "France", code: "FR", timezones: ["Europe/Paris"] },
            { name: "Gabon", code: "GA", timezones: ["Africa/Libreville"] },
            { name: "Gambia", code: "GM", timezones: ["Africa/Banjul"] },
            { name: "Georgia", code: "GE", timezones: ["Asia/Tbilisi"] },
            { name: "Germany", code: "DE", timezones: ["Europe/Berlin"] },
            { name: "Ghana", code: "GH", timezones: ["Africa/Accra"] },
            { name: "Greece", code: "GR", timezones: ["Europe/Athens"] },
            { name: "Grenada", code: "GD", timezones: ["America/Grenada"] },
            { name: "Guatemala", code: "GT", timezones: ["America/Guatemala"] },
            { name: "Guinea", code: "GN", timezones: ["Africa/Conakry"] },
            { name: "Guinea-Bissau", code: "GW", timezones: ["Africa/Bissau"] },
            { name: "Guyana", code: "GY", timezones: ["America/Guyana"] },
            { name: "Haiti", code: "HT", timezones: ["America/Port-au-Prince"] },
            { name: "Honduras", code: "HN", timezones: ["America/Tegucigalpa"] },
            { name: "Hungary", code: "HU", timezones: ["Europe/Budapest"] },
            { name: "Iceland", code: "IS", timezones: ["Atlantic/Reykjavik"] },
            { name: "India", code: "IN", timezones: ["Asia/Kolkata"] },
            { name: "Indonesia", code: "ID", timezones: ["Asia/Jakarta", "Asia/Jayapura"] },
            { name: "Iran", code: "IR", timezones: ["Asia/Tehran"] },
            { name: "Iraq", code: "IQ", timezones: ["Asia/Baghdad"] },
            { name: "Ireland", code: "IE", timezones: ["Europe/Dublin"] },
            { name: "Israel", code: "IL", timezones: ["Asia/Jerusalem"] },
            { name: "Italy", code: "IT", timezones: ["Europe/Rome"] },
            { name: "Jamaica", code: "JM", timezones: ["America/Jamaica"] },
            { name: "Japan", code: "JP", timezones: ["Asia/Tokyo"] },
            { name: "Jordan", code: "JO", timezones: ["Asia/Amman"] },
            { name: "Kazakhstan", code: "KZ", timezones: ["Asia/Almaty", "Asia/Qyzylorda"] },
            { name: "Kenya", code: "KE", timezones: ["Africa/Nairobi"] },
            { name: "Kiribati", code: "KI", timezones: ["Pacific/Tarawa"] },
            { name: "Kuwait", code: "KW", timezones: ["Asia/Kuwait"] },
            { name: "Kyrgyzstan", code: "KG", timezones: ["Asia/Bishkek"] },
            { name: "Laos", code: "LA", timezones: ["Asia/Vientiane"] },
            { name: "Latvia", code: "LV", timezones: ["Europe/Riga"] },
            { name: "Lebanon", code: "LB", timezones: ["Asia/Beirut"] },
            { name: "Lesotho", code: "LS", timezones: ["Africa/Maseru"] },
            { name: "Liberia", code: "LR", timezones: ["Africa/Monrovia"] },
            { name: "Libya", code: "LY", timezones: ["Africa/Tripoli"] },
            { name: "Liechtenstein", code: "LI", timezones: ["Europe/Vaduz"] },
            { name: "Lithuania", code: "LT", timezones: ["Europe/Vilnius"] },
            { name: "Luxembourg", code: "LU", timezones: ["Europe/Luxembourg"] },
            { name: "Madagascar", code: "MG", timezones: ["Indian/Antananarivo"] },
            { name: "Malawi", code: "MW", timezones: ["Africa/Blantyre"] },
            { name: "Malaysia", code: "MY", timezones: ["Asia/Kuala_Lumpur"] },
            { name: "Maldives", code: "MV", timezones: ["Indian/Maldives"] },
            { name: "Mali", code: "ML", timezones: ["Africa/Bamako"] },
            { name: "Malta", code: "MT", timezones: ["Europe/Malta"] },
            { name: "Marshall Islands", code: "MH", timezones: ["Pacific/Majuro"] },
            { name: "Mauritania", code: "MR", timezones: ["Africa/Nouakchott"] },
            { name: "Mauritius", code: "MU", timezones: ["Indian/Mauritius"] },
            { name: "Mexico", code: "MX", timezones: ["America/Mexico_City", "America/Tijuana"] },
            { name: "Micronesia", code: "FM", timezones: ["Pacific/Pohnpei"] },
            { name: "Moldova", code: "MD", timezones: ["Europe/Chisinau"] },
            { name: "Monaco", code: "MC", timezones: ["Europe/Monaco"] },
            { name: "Mongolia", code: "MN", timezones: ["Asia/Ulaanbaatar"] },
            { name: "Montenegro", code: "ME", timezones: ["Europe/Podgorica"] },
            { name: "Morocco", code: "MA", timezones: ["Africa/Casablanca"] },
            { name: "Mozambique", code: "MZ", timezones: ["Africa/Maputo"] },
            { name: "Myanmar", code: "MM", timezones: ["Asia/Yangon"] },
            { name: "Namibia", code: "NA", timezones: ["Africa/Windhoek"] },
            { name: "Nauru", code: "NR", timezones: ["Pacific/Nauru"] },
            { name: "Nepal", code: "NP", timezones: ["Asia/Kathmandu"] },
            { name: "Netherlands", code: "NL", timezones: ["Europe/Amsterdam"] },
            { name: "New Zealand", code: "NZ", timezones: ["Pacific/Auckland"] },
            { name: "Nicaragua", code: "NI", timezones: ["America/Managua"] },
            { name: "Niger", code: "NE", timezones: ["Africa/Niamey"] },
            { name: "Nigeria", code: "NG", timezones: ["Africa/Lagos"] },
            { name: "North Korea", code: "KP", timezones: ["Asia/Pyongyang"] },
            { name: "North Macedonia", code: "MK", timezones: ["Europe/Skopje"] },
            { name: "Norway", code: "NO", timezones: ["Europe/Oslo"] },
            { name: "Oman", code: "OM", timezones: ["Asia/Muscat"] },
            { name: "Pakistan", code: "PK", timezones: ["Asia/Karachi"] },
            { name: "Palau", code: "PW", timezones: ["Pacific/Palau"] },
            { name: "Panama", code: "PA", timezones: ["America/Panama"] },
            { name: "Papua New Guinea", code: "PG", timezones: ["Pacific/Port_Moresby"] },
            { name: "Paraguay", code: "PY", timezones: ["America/Asuncion"] },
            { name: "Peru", code: "PE", timezones: ["America/Lima"] },
            { name: "Philippines", code: "PH", timezones: ["Asia/Manila"] },
            { name: "Poland", code: "PL", timezones: ["Europe/Warsaw"] },
            { name: "Portugal", code: "PT", timezones: ["Europe/Lisbon"] },
            { name: "Qatar", code: "QA", timezones: ["Asia/Qatar"] },
            { name: "Romania", code: "RO", timezones: ["Europe/Bucharest"] },
            { name: "Russia", code: "RU", timezones: ["Europe/Moscow", "Asia/Vladivostok", "Asia/Yekaterinburg"] },
            { name: "Rwanda", code: "RW", timezones: ["Africa/Kigali"] },
            { name: "Saint Kitts and Nevis", code: "KN", timezones: ["America/St_Kitts"] },
            { name: "Saint Lucia", code: "LC", timezones: ["America/St_Lucia"] },
            { name: "Saint Vincent and the Grenadines", code: "VC", timezones: ["America/St_Vincent"] },
            { name: "Samoa", code: "WS", timezones: ["Pacific/Apia"] },
            { name: "San Marino", code: "SM", timezones: ["Europe/San_Marino"] },
            { name: "Sao Tome and Principe", code: "ST", timezones: ["Africa/Sao_Tome"] },
            { name: "Saudi Arabia", code: "SA", timezones: ["Asia/Riyadh"] },
            { name: "Senegal", code: "SN", timezones: ["Africa/Dakar"] },
            { name: "Serbia", code: "RS", timezones: ["Europe/Belgrade"] },
            { name: "Seychelles", code: "SC", timezones: ["Indian/Mahe"] },
            { name: "Sierra Leone", code: "SL", timezones: ["Africa/Freetown"] },
            { name: "Singapore", code: "SG", timezones: ["Asia/Singapore"] },
            { name: "Slovakia", code: "SK", timezones: ["Europe/Bratislava"] },
            { name: "Slovenia", code: "SI", timezones: ["Europe/Ljubljana"] },
            { name: "Solomon Islands", code: "SB", timezones: ["Pacific/Guadalcanal"] },
            { name: "Somalia", code: "SO", timezones: ["Africa/Mogadishu"] },
            { name: "South Africa", code: "ZA", timezones: ["Africa/Johannesburg"] },
            { name: "South Korea", code: "KR", timezones: ["Asia/Seoul"] },
            { name: "South Sudan", code: "SS", timezones: ["Africa/Juba"] },
            { name: "Spain", code: "ES", timezones: ["Europe/Madrid"] },
            { name: "Sri Lanka", code: "LK", timezones: ["Asia/Colombo"] },
            { name: "Sudan", code: "SD", timezones: ["Africa/Khartoum"] },
            { name: "Suriname", code: "SR", timezones: ["America/Paramaribo"] },
            { name: "Sweden", code: "SE", timezones: ["Europe/Stockholm"] },
            { name: "Switzerland", code: "CH", timezones: ["Europe/Zurich"] },
            { name: "Syria", code: "SY", timezones: ["Asia/Damascus"] },
            { name: "Taiwan", code: "TW", timezones: ["Asia/Taipei"] },
            { name: "Tajikistan", code: "TJ", timezones: ["Asia/Dushanbe"] },
            { name: "Tanzania", code: "TZ", timezones: ["Africa/Dar_es_Salaam"] },
            { name: "Thailand", code: "TH", timezones: ["Asia/Bangkok"] },
            { name: "Togo", code: "TG", timezones: ["Africa/Lome"] },
            { name: "Tonga", code: "TO", timezones: ["Pacific/Tongatapu"] },
            { name: "Trinidad and Tobago", code: "TT", timezones: ["America/Port_of_Spain"] },
            { name: "Tunisia", code: "TN", timezones: ["Africa/Tunis"] },
            { name: "Turkey", code: "TR", timezones: ["Europe/Istanbul"] },
            { name: "Turkmenistan", code: "TM", timezones: ["Asia/Ashgabat"] },
            { name: "Tuvalu", code: "TV", timezones: ["Pacific/Funafuti"] },
            { name: "Uganda", code: "UG", timezones: ["Africa/Kampala"] },
            { name: "Ukraine", code: "UA", timezones: ["Europe/Kiev"] },
            { name: "United Arab Emirates", code: "AE", timezones: ["Asia/Dubai"] },
            { name: "United Kingdom", code: "GB", timezones: ["Europe/London"] },
            { name: "United States", code: "US", timezones: ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"] },
            { name: "Uruguay", code: "UY", timezones: ["America/Montevideo"] },
            { name: "Uzbekistan", code: "UZ", timezones: ["Asia/Tashkent"] },
            { name: "Vanuatu", code: "VU", timezones: ["Pacific/Efate"] },
            { name: "Vatican City", code: "VA", timezones: ["Europe/Vatican"] },
            { name: "Venezuela", code: "VE", timezones: ["America/Caracas"] },
            { name: "Vietnam", code: "VN", timezones: ["Asia/Ho_Chi_Minh"] },
            { name: "Yemen", code: "YE", timezones: ["Asia/Aden"] },
            { name: "Zambia", code: "ZM", timezones: ["Africa/Lusaka"] },
            { name: "Zimbabwe", code: "ZW", timezones: ["Africa/Harare"] }
            // Add more countries and their primary timezones here
        ];

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country.code;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });

        function populateTimezones() {
            const selectedCountry = countrySelect.value;

            // Clear previous options and time display
            timezoneSelect.innerHTML = '<option value="">Select a timezone</option>';
            timeDisplay.textContent = '';

            const country = countries.find(country => country.code === selectedCountry);

            if (country) {
                if (country.timezones.length > 1) {
                    timezoneSelect.style.display = 'block';
                    country.timezones.forEach(zone => {
                        const option = document.createElement("option");
                        option.value = zone;
                        option.textContent = zone;
                        timezoneSelect.appendChild(option);
                    });
                } else {
                    timezoneSelect.style.display = 'none';
                    displayLocalTime(country.timezones[0]);
                }
            }
        }

        function displayLocalTime(timezone) {
            const currentTime = new Date().toLocaleString("en-US", { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            timeDisplay.textContent = `Current time in ${timezone}: ${currentTime}`;
        }

        function displayTime() {
            const selectedTimezone = timezoneSelect.value;

            if (selectedTimezone) {
                displayLocalTime(selectedTimezone);
            }
        }
 
