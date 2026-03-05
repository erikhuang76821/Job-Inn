// Seed Data Utility — Run once to populate Firestore with initial data
// Usage: Import and call seedDatabase() from browser console or a button

import {
    db, COLLECTIONS,
    collection, doc, setDoc, getDocs, query, limit, serverTimestamp, writeBatch
} from './firebase';
import { generateCompanies, generateMockData } from '../data/mockData';

export async function seedDatabase() {
    console.log('🌱 Seeding database...');

    // Check if already seeded
    const existingCompanies = await getDocs(query(collection(db, COLLECTIONS.companies), limit(1)));
    if (!existingCompanies.empty) {
        console.log('⚠️ Database already has data. Skipping seed.');
        return false;
    }

    const batch = writeBatch(db);

    // Seed Companies
    const companies = generateCompanies();
    for (const company of companies) {
        const companyRef = doc(db, COLLECTIONS.companies, company.id);
        batch.set(companyRef, {
            name: company.name,
            aliases: company.aliases || [],
            industry: company.industry,
            stats: company.stats || { median: 0, avg: 0, count: 0, year: 112 },
            createdAt: serverTimestamp(),
        });
    }

    // Commit companies first (batch limit is 500)
    await batch.commit();
    console.log(`✅ Seeded ${companies.length} companies`);

    // Seed Salary Entries (in smaller batches)
    const mockEntries = generateMockData(30); // 30 entries for seed
    const entryBatch = writeBatch(db);
    for (const entry of mockEntries) {
        const entryRef = doc(collection(db, COLLECTIONS.salaryEntries));
        entryBatch.set(entryRef, {
            company: entry.company,
            industry: entry.industry,
            title: entry.title,
            department: entry.department,
            annual_package: entry.annual_package,
            salary: entry.salary,
            currency: entry.currency,
            period: entry.period,
            experience: entry.experience,
            location: entry.location,
            content: entry.content,
            status: 'approved',
            interactions: [],
            authorId: 'seed',
            createdAt: serverTimestamp(),
        });
    }
    await entryBatch.commit();
    console.log(`✅ Seeded ${mockEntries.length} salary entries`);

    // Seed some discussion messages for first 3 companies
    for (let i = 0; i < 3; i++) {
        const company = companies[i];
        const msgs = [
            { user: 'TechGuy_99', type: '推', content: `${company.name} 的風氣真的不錯，WFH 很自由。` },
            { user: 'FreshMan', type: '→', content: '請問面試大概多久會收到通知？' },
            { user: 'AngryBird', type: '噓', content: '年終今年砍很多，不要被騙了，塊陶阿！' },
            { user: 'HR_Helper', type: '推', content: '內部福利其實一直在增加，免費午餐回來了。' },
        ];
        const msgBatch = writeBatch(db);
        for (const msg of msgs) {
            const msgRef = doc(collection(db, COLLECTIONS.discussions, company.id, COLLECTIONS.messages));
            msgBatch.set(msgRef, {
                ...msg,
                authorId: 'seed',
                createdAt: serverTimestamp(),
            });
        }
        await msgBatch.commit();
    }
    console.log('✅ Seeded discussion threads');

    console.log('🎉 Seed complete!');
    return true;
}
